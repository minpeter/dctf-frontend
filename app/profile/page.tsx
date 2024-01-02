import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EnvelopeOpenIcon, Link2Icon } from "@radix-ui/react-icons";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export default function Page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>username</CardTitle>
        <CardDescription>
          Please write any comments you would like to add
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 py-4">
          <div className="flex items-center gap-1">
            <Label htmlFor="email">
              <EnvelopeOpenIcon className="h-5 w-5 mr-2" />
            </Label>
            <Input id="email" value="test@gmail.com" className="col-span-3" />
          </div>
          <div className="flex items-center gap-1">
            <Label htmlFor="link">
              <Link2Icon className="h-5 w-5 mr-2" />
            </Label>
            <Input id="link" value="https://test.com" className="col-span-3" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        {/* update button */}
        <Button className="w-full">Update</Button>

        {/* delete button */}
      </CardFooter>
    </Card>
  );
}
