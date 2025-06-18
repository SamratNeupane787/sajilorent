import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
function Totalspending() {
  return (
    <div className="h-auto">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">
            Spending Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className=" flex flex-col items-start p-1">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Totalspending
