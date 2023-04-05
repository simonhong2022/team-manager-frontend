import Link from "next/link";
import EmployeesContent from "@/components/EmployeesContent";
import { List } from 'semantic-ui-react'

export default function Employees() {
  return (
    <main className="employees-main">
      <nav className="employees-navbar">
      <Link className="employees-navlink" href="/">Home</Link>
        <Link className="employees-navlink" href="/teams">Teams</Link>
        <Link className="employees-navlink" href="/employees">People</Link>
      </nav>
      <div className="employees-body-container">
        <EmployeesContent />
        <footer className="employees-footer">
          <List horizontal relaxed='very' inverted>
            <List.Item>
              <List.Content>
                <List.Header>Simon.H</List.Header>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>Rasmus.R</List.Header>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>Mona.T</List.Header>
              </List.Content>
            </List.Item>
          </List>
        </footer>
      </div>
    </main>
  )
}