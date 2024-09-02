import { useParams } from "react-router-dom"

export const SpecificProfile = () => {
    const params = useParams<{profileId: string}>();
    // console.log(params);

  return (
    <div>SpecificProfile {params.profileId} </div>
  )
}
