import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
    const {data: session, status} = useSession();
    const loading = status === "loading";
    if (status === "authenticated" && session.user) {
        return (
            <>
                Signed in as {session.user.email} <br />
                <button onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    return (
        <>
            Please log in <br />
            <button onClick={() => signIn()}>Sign in</button>
        </>
    )
}