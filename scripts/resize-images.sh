#!/usr/bin/env bash
#
# Resize images to a target longest-edge for web display.
# Run this BEFORE Glaze so you glaze at final display resolution
# (downscaling after glazing degrades the protective perturbations).
#
# Usage:
#   scripts/resize-images.sh [options] <input...> <output_dir>
#
# Examples:
#   scripts/resize-images.sh ~/art/raw/*.jpg ./resized
#   scripts/resize-images.sh -e 2048 -q 92 photo.jpg ./out
#
# Options:
#   -e EDGE     Longest edge in px         (default: 1536)
#   -q QUALITY  JPEG quality 1-100         (default: 82)
#   -f FORMAT   Output format: jpg|png|webp (default: keep source ext, jpg for jpg/jpeg)
#   -s          Strip all metadata (EXIF, GPS, etc.)  [recommended]
#   -h          Show this help

set -euo pipefail

EDGE=1536
QUALITY=82
FORMAT=""
STRIP=0

while getopts "e:q:f:sh" opt; do
  case "$opt" in
    e) EDGE="$OPTARG" ;;
    q) QUALITY="$OPTARG" ;;
    f) FORMAT="$OPTARG" ;;
    s) STRIP=1 ;;
    h) grep '^#' "$0" | sed 's/^# \{0,1\}//'; exit 0 ;;
    *) echo "Run with -h for usage." >&2; exit 1 ;;
  esac
done
shift $((OPTIND - 1))

if [ "$#" -lt 2 ]; then
  echo "Error: need at least one input and an output dir. Run -h for usage." >&2
  exit 1
fi

# ImageMagick 7 uses `magick`, 6 uses `convert`.
if command -v magick >/dev/null 2>&1; then
  IM="magick"
elif command -v convert >/dev/null 2>&1; then
  IM="convert"
else
  echo "Error: ImageMagick not found. Install with: brew install imagemagick" >&2
  exit 1
fi

# Last argument is the output directory; everything before it is input.
OUT_DIR="${!#}"
INPUTS=("${@:1:$#-1}")
mkdir -p "$OUT_DIR"

strip_flag=()
[ "$STRIP" -eq 1 ] && strip_flag=(-strip)

for src in "${INPUTS[@]}"; do
  [ -f "$src" ] || { echo "Skipping (not a file): $src" >&2; continue; }

  base="$(basename "$src")"
  name="${base%.*}"
  ext="${base##*.}"

  # Decide output extension.
  if [ -n "$FORMAT" ]; then
    out_ext="$FORMAT"
  else
    case "$(echo "$ext" | tr '[:upper:]' '[:lower:]')" in
      jpg|jpeg) out_ext="jpg" ;;
      *)        out_ext="$(echo "$ext" | tr '[:upper:]' '[:lower:]')" ;;
    esac
  fi

  dest="$OUT_DIR/$name.$out_ext"

  "$IM" "$src" \
    -auto-orient \
    -resize "${EDGE}x${EDGE}>" \
    -quality "$QUALITY" \
    "${strip_flag[@]}" \
    "$dest"

  # Report before/after size.
  before=$(du -h "$src" | cut -f1)
  after=$(du -h "$dest" | cut -f1)
  dims=$("$IM" identify -format '%wx%h' "$dest")
  printf '%s  %s -> %s  (%s, %s)\n' "$base" "$before" "$after" "$dims" "$out_ext"
done

echo "Done. Output in: $OUT_DIR"
