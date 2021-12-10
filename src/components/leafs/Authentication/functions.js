export const parallelDelay = fn => {
  return Promise.all([
    fn(),
    new Promise((resolve, reject) => setTimeout(resolve, 600))
  ])
}
