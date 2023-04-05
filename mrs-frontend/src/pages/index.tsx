import { List , Button, Icon} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

export default function Home() {
  return (
    <main className="home-main">
      <header className="home-header">
        <h1>  Team Manager </h1>
      </header>
      <div className="home-body-container">
        <div className="home-content-wrap">
          <div className="home-department-container">
            <div className="home-department-box">
              <Button className="home-department-btn" href="/teams" size="massive" color="orange"> <Icon name='code'/>  Tech Dep. </Button>
            </div>
            <div className="home-department-box">
            <Button className="home-department-btn" href="/" size="massive" color="olive"> <Icon name='user'/>  HR Dep.</Button>
            </div>
            <div className="home-department-box">
            <Button className="home-department-btn" href="/"  size="massive" color="blue"> <Icon name='euro'/>  Finance Dep.</Button>
            </div>
          </div>
        </div>
        <footer className="home-footer">
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

