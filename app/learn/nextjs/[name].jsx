import { useRouter } from "next/router"

export default function learn() {
    const router = useRouter
    const{ name } = router.query
    return (
      <main>
        <>
            <h1>Learn NextJS 13!!!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus adipisci cum pariatur corporis ullam maxime repudiandae suscipit facilis, officiis iste exercitationem, ex mollitia incidunt consequatur quae. Officia ipsa tempora sit.</p>
        </>
      </main>
    )
  }