import { UserButton } from "@clerk/nextjs";

 const Home = () => {
  return (
    <UserButton afterSwitchSessionUrl="/" />
  )
}

export default Home