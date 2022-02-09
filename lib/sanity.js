import sanityClient from "@sanity/client";

export const client = sanityClient({
    projectId:'ryx2epcb',
    dataset:'production',
    apiVersion:'2021-03-25',
    token:'skp4x8ODCXXw2w3yn7QKFYBa8AtIHHhV4vKo2WuBVnJp4iwYltS2aoeAZAvAMP0fhydFXk5V1zXsWGuOumMQKdxpzSJz78U4mgr6crHjscPR4ba4HbxEtSiKqepBIvBxrOToAXJhAmGKqqz1gHIiheJD7PoPAVCJE9JhvKSZYW7bdM9kR0yf',
    useCdn:false
})