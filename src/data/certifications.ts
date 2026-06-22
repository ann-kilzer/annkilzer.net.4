export interface Certification {
  name: string
  issuer: string
  expires: string | null
  image: string
  url: string
}

export const certifications: Certification[] = [
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    expires: 'Aug 2026',
    image: 'https://images.credly.com/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png',
    url: 'https://www.credly.com/badges/99caf104-214f-4648-a214-8a75905ba7c9',
  },
  {
    name: 'AWS Certified Developer – Associate',
    issuer: 'Amazon Web Services',
    expires: 'Dec 2027',
    image: 'https://images.credly.com/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png',
    url: 'https://www.credly.com/badges/d00bc512-6c17-4bd8-a3b0-474edef2bb59',
  },
  {
    name: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services',
    expires: 'Feb 2028',
    image: 'https://images.credly.com/images/4d4693bb-530e-4bca-9327-de07f3aa2348/image.png',
    url: 'https://www.credly.com/badges/d9d2eb3d-db2a-424e-b373-1ff8ffb33116',
  },
  {
    name: 'Cloud Digital Leader',
    issuer: 'Google Cloud',
    expires: 'May 2028',
    image: 'https://images.credly.com/images/44994cda-b5b0-44cb-9a6d-d29b57163073/image.png',
    url: 'https://www.credly.com/badges/763d4b63-2df4-4eed-b648-298e080cf183',
  },
  {
    name: 'GitHub Foundations',
    issuer: 'GitHub',
    expires: 'Dec 2026',
    image: 'https://images.credly.com/images/024d0122-724d-4c5a-bd83-cfe3c4b7a073/image.png',
    url: 'https://www.credly.com/badges/eb21082d-2373-4c16-a595-4e076cebb36e',
  },
  {
    name: 'GitHub Advanced Security',
    issuer: 'GitHub',
    expires: 'Jan 2027',
    image: 'https://images.credly.com/images/c9ed294b-f8ac-48fa-a8c3-96dab1f110f2/image.png',
    url: 'https://www.credly.com/badges/e6e7835b-a340-4f75-b85e-326172737215',
  },
  {
    name: 'GitHub Actions',
    issuer: 'GitHub',
    expires: 'Mar 2027',
    image: 'https://images.credly.com/images/89efc3e7-842b-4790-b09b-9ea5efc71ec3/image.png',
    url: 'https://www.credly.com/badges/8653fa49-52e8-4c61-9afa-be4374f3806f',
  },
  {
    name: 'AWS Partner: Generative AI Essentials',
    issuer: 'Amazon Web Services',
    expires: null,
    image: 'https://images.credly.com/images/4b547104-5ce9-43d5-8708-a7abb4b0c7ec/blob',
    url: 'https://www.credly.com/badges/514d4412-3d9d-4cae-ab24-03d94242d89c',
  },
]
