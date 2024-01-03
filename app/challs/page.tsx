"use client";

import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
  CardDescription,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge, badgeVariants } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";

import Link from "next/link";

import Fire from "@/components/confetti";

export default function Page() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-bold flex justify-between space-x-20">
            <div className="flex space-x-4">
              <h3>misc/sanity-check</h3>
              <div className="flex space-x-2">
                <Badge variant="outline">dynamic</Badge>
                <Badge variant="outline">Running</Badge>
              </div>
            </div>

            <p>1 solves / 485 points</p>
          </CardTitle>
          <CardDescription>minpeter</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 py-4">
          <p>I get to write the sanity check challenge! Alright!</p>

          <div className="flex w-full items-center space-x-2">
            <Input type="flag" placeholder="Flag" />
            <Button type="submit" onClick={Fire}>
              Submit
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center bg-gray-100 py-4 dark:bg-gray-800">
          <div className="space-y-2">
            <Label htmlFor="downloads">Downloads</Label>
            <div className="flex space-x-2">
              <Link
                href="#none"
                className={badgeVariants({ variant: "outline" })}
              >
                ciphertext.txt
              </Link>
              <Link
                href="#none"
                className={badgeVariants({ variant: "outline" })}
              >
                substitute.py
              </Link>
            </div>
          </div>

          <Button>Instance Start</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-bold flex justify-between space-x-20">
            <div className="flex space-x-4">
              <h3>misc/sanity-check</h3>
              <div className="flex space-x-2">
                <Badge variant="outline">dynamic</Badge>
                <Badge variant="outline">Running</Badge>
              </div>
            </div>

            <p>1 solves / 485 points</p>
          </CardTitle>
          <CardDescription>minpeter</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 py-4">
          <p>I get to write the sanity check challenge! Alright!</p>

          <Tabs defaultValue="pwn" className="space-y-4">
            <TabsList>
              <TabsTrigger value="pwn">pwn</TabsTrigger>
              <TabsTrigger value="socat">socat</TabsTrigger>
              <TabsTrigger value="ncat">ncat</TabsTrigger>
              <TabsTrigger value="openssl">openssl</TabsTrigger>
              <TabsTrigger value="flag">Flag Submission</TabsTrigger>
            </TabsList>
            <TabsContent value="pwn">
              <div className="flex w-full items-center space-x-2">
                <Input
                  type="connection"
                  value="remote('bdspz.dklodd.minpeter.tech', 443, ssl=True)"
                  readOnly
                />
                <Button type="submit">Copy</Button>
              </div>
            </TabsContent>
            <TabsContent value="ncat">
              <div className="flex w-full items-center space-x-2">
                <Input
                  type="connection"
                  value="ncat --ssl bdspz.dklodd.minpeter.tech 443"
                  readOnly
                />
                <Button type="submit">Copy</Button>
              </div>
            </TabsContent>
            <TabsContent value="socat">
              <div className="flex w-full items-center space-x-2">
                <Input
                  type="connection"
                  value="socat openssl-connect:bdspz.dklodd.minpeter.tech:443"
                  readOnly
                />
                <Button type="submit">Copy</Button>
              </div>
            </TabsContent>
            <TabsContent value="openssl">
              <div className="flex w-full items-center space-x-2">
                <Input
                  type="connection"
                  value="openssl s_client -connect bdspz.dklodd.minpeter.tech:443"
                  readOnly
                />
                <Button type="submit">Copy</Button>
              </div>
            </TabsContent>
            <TabsContent value="flag">
              <div className="flex w-full items-center space-x-2">
                <Input type="flag" placeholder="Flag" />
                <Button type="submit" onClick={Fire}>
                  Sumit
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between items-center bg-gray-100 py-4 dark:bg-gray-800">
          <div className="space-y-2">
            <Label htmlFor="downloads">Downloads</Label>
            <div className="flex space-x-2">
              <Link
                href="#none"
                className={badgeVariants({ variant: "outline" })}
              >
                ciphertext.txt
              </Link>
              <Link
                href="#none"
                className={badgeVariants({ variant: "outline" })}
              >
                substitute.py
              </Link>
            </div>
          </div>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button>Instance Stop</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Stopping in 3 minute</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-bold flex justify-between space-x-20">
            <div className="flex space-x-4">
              <h3>misc/sanity-check</h3>
              <div className="flex space-x-2">
                <Badge variant="outline">dynamic</Badge>
                <Badge variant="outline">Running</Badge>
              </div>
            </div>

            <p>1 solves / 485 points</p>
          </CardTitle>
          <CardDescription>minpeter</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 py-4">
          {/* web site 주소 */}
          <Link
            href="https://sanity-check.chal.seccon.jp/"
            className="text-blue-500"
          >
            https://sanity-check.chal.seccon.jp/
          </Link>

          <p>I get to write the sanity check challenge! Alright!</p>

          <div className="flex w-full items-center space-x-2">
            <Input type="flag" placeholder="Flag" />
            <Button type="submit" onClick={Fire}>
              Sumit
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center bg-gray-100 py-4 dark:bg-gray-800">
          <div className="space-y-2">
            <Label htmlFor="downloads">Downloads</Label>
            <div className="flex space-x-2">
              <Link
                href="#none"
                className={badgeVariants({ variant: "outline" })}
              >
                ciphertext.txt
              </Link>
              <Link
                href="#none"
                className={badgeVariants({ variant: "outline" })}
              >
                substitute.py
              </Link>
            </div>
          </div>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button>Instance Stop</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Stopping in 3 minute</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardFooter>
      </Card>
    </>
  );
}
