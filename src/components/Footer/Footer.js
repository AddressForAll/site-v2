import React from 'react'
import Container from '../Container/Container'

const Footer = () => (
  <footer>
    <Container>
      <div className="row">
        <div className="col col-1-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          ducimus sunt sapiente dolorum doloremque voluptatibus delectus modi
          aliquam quas dolor tempore nisi, est, quibusdam natus. Est illo
          quisquam cumque mollitia?
        </div>
        <div className="col col-1-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
          veritatis animi nemo provident iure culpa natus molestias est.
          Temporibus consequuntur vero similique facere quam libero officiis
          pariatur repudiandae tenetur nisi.
        </div>
        <div className="col col-1-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          praesentium, quae ea excepturi id libero, enim maiores, quo error
          fugit ducimus! Corrupti ducimus qui labore dolorum voluptatum. Vitae,
          sequi perferendis?
        </div>
        <div className="col col-2-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga saepe
          suscipit qui dolorum, blanditiis, mollitia repellat cupiditate
          inventore, quasi ullam atque obcaecati modi odio perferendis
          temporibus eos facilis? Qui, accusamus.
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col col-4-5">
          <p>© 2022 AddressForAll</p>
        </div>
        <div className="col col-1-5">
          <ul id="sn-icons" className="nav">
            <li>
              <a href="#">
                <svg>
                  <use xlinkHref="#github"></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg>
                  <use xlinkHref="#twitter"></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg>
                  <use xlinkHref="#instagram"></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg>
                  <use xlinkHref="#facebook"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer