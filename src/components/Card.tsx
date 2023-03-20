import { ButtonLink } from "./ButtonLink"
import { OnGitHub } from "./OnGitHub"

const Card = () => {
  return (
    <div>
      <h2>Prune Your Followers</h2>
      <p>Find Twitter accounts you follow that no longer spark joy, unfollow them and make room for new connections to grow</p>
      <div className="flex items-center">
        <ButtonLink href="#" label="Visit Website" borderWidth="thin" isButterflyShowing={false} />
        <OnGitHub href="#" />
      </div>

      {/* screen 1 */}
      <div></div>

      {/* screen 2 */}
      <div></div>
    </div>
  )
}

export {Card}