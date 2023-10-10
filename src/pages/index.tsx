
import Protected from '@/components/protectedRoute/Protect'

export default function Home() {
  return(
    <Protected>
      <h1>Esta pagina sera a home</h1>
    </Protected>
  )
}