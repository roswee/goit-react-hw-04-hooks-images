import React from "react"
import ContentLoader from "react-content-loader"

const Loader = (props) => (
  <ContentLoader 
  speed={2}
  width={400}
  height={460}
  viewBox="0 0 400 460"
  backgroundColor="#f3f3f3"
  foregroundColor="#26411b"
  {...props}
>
  <rect x="-2" y="-2" rx="2" ry="2" width="200" height="200" /> 
  <rect x="217" y="-4" rx="2" ry="2" width="200" height="200" /> 
  <rect x="-3" y="215" rx="2" ry="2" width="200" height="200" /> 
  <rect x="214" y="215" rx="2" ry="2" width="200" height="200" />
  </ContentLoader>
)

export default Loader