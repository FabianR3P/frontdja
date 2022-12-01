import {
    Card,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
   
  export const CardApp=({quote,reference, author })=> {
    return (<Card className="basis-1/4 my-2 mx-4">
        <CardBody className="text-center">
          <Typography>
            {quote}
          </Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">{author}</Typography>
          <Typography variant="small" color="gray" className="flex gap-1">
            {reference}
          </Typography>
        </CardFooter>
      </Card>
    );
  }