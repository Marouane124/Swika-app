//import { authOptions } from "@/lib/auth";
import NextAuth, {NextAuthOptions, getServerSession} from "next-auth";

const handler = NextAuth(authOptions as NextAuthOptions);

export { handler as GET, handler as POST };
