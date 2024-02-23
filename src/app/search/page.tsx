import React from "react";
import { useRouter } from "next/router";

const page = () => {
  const router = useRouter();
  const { query } = router;
    return <div>page
      
        {query.search}
  </div>;
};

export default page;
