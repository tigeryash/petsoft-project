import H1 from "@/components/H1";
import ContentBlock from "@/components/content-block";
import SignOutBtn from "@/components/sign-out-btn";
import { checkAuth } from "@/lib/server-utils";

const AccountPage = async () => {
  const session = await checkAuth();

  return (
    <main>
      <H1 className="my-8 text-white">Your Account</H1>

      <ContentBlock className="h-[500px] flex flex-col justify-center items-center">
        <p> logged in as {session.user.email}</p>
        <SignOutBtn />
      </ContentBlock>
    </main>
  );
};

export default AccountPage;
