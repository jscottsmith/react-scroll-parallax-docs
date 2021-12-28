import { graphql, StaticQuery } from "gatsby"
import React from "react"
import { MaxFullWrapper } from "../../../../components/max-full-wrapper"

const query = graphql`
  query Home {
    file {
      id
    }
    markdownRemark {
      html
    }
  }
`

export const Intro = () => {
  return (
    <StaticQuery query={query}>
      {data => (
        <MaxFullWrapper maxWidth="max-w-screen-lg" className="bg-gray-100">
          <article className="prose max-w-none bg-white p-md shadow-sm rounded-md">
            <div
              dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            />
          </article>
        </MaxFullWrapper>
      )}
    </StaticQuery>
  )
}
