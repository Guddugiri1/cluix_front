// DEFINE ALL EXTERNAL IMPORT

import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Suspense } from "react";

// DEFINE ALL INTERNAL IMPORT 
import HomeComponets from "@/components/HomeComponents/HomeComponets";


// DEFINE MAIN FUNCTION WITH EXPORT
export default function Home() {
  // DEFINE MAIN FUNCTION RETURN 
  return (
    <>
      <ErrorBoundary fallback={""}>
        <Suspense fallback={"Loading...."}>
          <HomeComponets />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
