import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { ChartColumnBigIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button, Flex, Heading, Text } from "@radix-ui/themes";

export default function Home() {
  return (
    <main className="min-h-[400px] h-[calc(100vh-80px)] flex items-center justify-center bg-gray-900 relative">
      <div className="relative z-10">
        <Flex direction="column" gap="4" align="center">
          <Heading size="9">
            <Flex align="center" gap="2">
              <ChartColumnBigIcon className="text-lime-500" size={60} />
              NextCash
            </Flex>
          </Heading>
          <Text size="6" color="gray">
            Track your finances with ease
          </Text>
          <SignedIn>
            <Button asChild size="3">
              <Link href="/dashboard">Go To Your Dashboard</Link>
            </Button>
          </SignedIn>
          <SignedOut>
            <Flex gap="3" align="center" justify="center">
              <Button asChild size="3" color="lime">
                <SignInButton />
              </Button>
              <Button asChild size="3" variant="surface">
                <SignUpButton />
              </Button>
            </Flex>
          </SignedOut>
        </Flex>
      </div>
    </main>
  );
}
