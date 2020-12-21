/* Export static vars here */
const pageTransition = {
  exit: { opacity: 0, transition: { duration: 0.5 } },
  enter: {
    opacity: 1,
    transition: { delay: 0.1, duration: 1 }
  }
};

let staticVars = {
  pageTransition: pageTransition
}
export default staticVars