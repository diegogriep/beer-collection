import BeerDetail from '@/components/BeerDetail'
import { getData } from '@/utils/getData'

export default async function BeerDetailPage({
  params: { id },
}: {
  params: { id: number }
}) {
  const [beer] = await getData('', id)

  return <BeerDetail {...beer} />
}
