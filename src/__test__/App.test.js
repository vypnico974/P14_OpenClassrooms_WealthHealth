import App from "../App"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "../redux/store"
import { render, screen } from '@testing-library/react'


const employee_mock = [{
      id: 1,
      firstName: "Amanda",
      lastName: "Linasta",
      dateOfBirth: "02/04/1980",
      street: "43 8th Adison",
      city: "Addison",
      state: "Alabama",
      stateAbbrev: "AL",
      zipCode: "35083",
      startDate: "02/05/2023",
      department: "Sales"
}]

localStorage.setItem("employees", JSON.stringify(employee_mock))

describe("When the URI is \"/\"", () => {
  test("Display create employee page)", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    )
    const save = screen.getByText("Save")
    expect(save).toBeInTheDocument()
  })
})


describe("When the URI is \"/list\"", () => {
  test("Display list of employees (Current Employees)", () => {
    window.location.assign("/list")
    render(
      <BrowserRouter location="window.location.href">
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    )
   // expect(window.location.pathname === "/list").toBeTruthy()
    const title = screen.getByText("Current Employees")
    expect(title).toBeInTheDocument()
  })
})