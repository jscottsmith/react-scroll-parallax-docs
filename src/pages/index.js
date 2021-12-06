import React from "react"
import { Header } from "../components/header"
import { Hero } from "../components/hero"
import { PageContainer } from "../templates/page-container"

export default function Home() {
  return (
    <PageContainer>
      <Hero />
      <Header />
    </PageContainer>
  )
}
