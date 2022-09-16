import RetreiveNFTS from '../components/nfts/retreive'
import Layout from '../components/layout/layout'

export default function Index() {
  return (
    <RetreiveNFTS></RetreiveNFTS>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
