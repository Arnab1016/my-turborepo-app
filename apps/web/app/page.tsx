import { LandingPage } from "../components/LandingPage";
import Dashboard from "../components/DashboardComp";
// import { prisma } from "@repo/db";
// type Props = Omit<ImageProps, "src"> & {
//   srcLight: string;
//   srcDark: string;
// };

// const ThemeImage = (props: Props) => {
//   const { srcLight, srcDark, ...rest } = props;

//   return (
//     <>
//       <Image {...rest} src={srcLight} className="imgLight" />
//       <Image {...rest} src={srcDark} className="imgDark" />
//     </>
//   );
// };

export default async function Home() {
  // const user = await prisma.user.findFirst();
  return (
    <div>
      {/* {user?.email ?? "No user found"} */}
      <LandingPage/>
    </div>
  );
}
