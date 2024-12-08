// other imports...
import { Module } from "@medusajs/framework/utils"
import helloWorldLoader from "./loaders/hello-world"
import HelloService from "./service"

export default Module("hello", {
  service: HelloService,
  loaders: [helloWorldLoader],
})