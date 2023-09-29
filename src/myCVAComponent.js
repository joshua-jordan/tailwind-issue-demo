import { cva } from "class-variance-authority";

/**
 * The following line is the problem. Classes like p-1, p-2 is working but classes with .5 like p-3.5 will be removed from tailwind
 */
const myCVAComponent = cva([],{defaultVariants:{size:"md"},variants:{size:{sm:["p-1"],md:["p-1.5"],lg:["p-2"],xl:["p-2.5"]}}});

export default myCVAComponent;