import React from "react";
import Header from "../../components/Header";
import Link from "next/link";
import { TiArrowLeftThick } from "react-icons/ti";
import { Button } from "@nextui-org/react";

export default function notFound() {
  return (
    <div>
      <Header title="Post not found" />
      <div className="text-center">
        <div>
          
          <Link href={`/`}>
            <Button variant="ghost" color="secondary" size="sm" startContent={<TiArrowLeftThick />}>Return Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
