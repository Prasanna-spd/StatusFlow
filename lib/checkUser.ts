import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export const checkUser = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  try {
    const loggedInUser = await prisma?.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    if (loggedInUser) {
        console.log("loggedInuser",loggedInUser)
      return loggedInUser;
    }

    const name = `${user.firstName} ${user.lastName}`;

    const newUser = await prisma.user.create({
      data: {
        clerkUserId: user.id,
        name,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress,
      },
    });

    console.log("new user",newUser)

    return newUser;
  } catch (error) {
    console.log(error);
  }
};