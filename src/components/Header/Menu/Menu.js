import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => (
    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <div class="brand">
            <svg><use xlinkHref="#logosvg"></use></svg>
        </div>
        </a>
        <div class="navbar">
            <ul class="nav">
                <li class="dropdown">
                <a
                    class="dropdown-toggle"
                    href="#"
                    id="corporateMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Corporate
                </a>
                <ul class="dropdown-menu" aria-labelledby="corporateMenuLink">
                    <li><a class="dropdown-item" href="#">About US</a></li>
                    <li><a class="dropdown-item" href="#">Statute</a></li>
                    <li><a class="dropdown-item" href="#">Projects</a></li>
                    <li><a class="dropdown-item" href="#">Partnerships</a></li>
                </ul>
                </li>
                <li class="dropdown">
                <a
                    class="dropdown-toggle"
                    href="#"
                    id="resourcesMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Resources
                </a>
                <ul class="dropdown-menu" aria-labelledby="resourcesMenuLink">
                    <li><a class="dropdown-item" href="#">Data</a></li>
                    <li><a class="dropdown-item" href="#">Services</a></li>
                    <li><a class="dropdown-item" href="#">API</a></li>
                    <li><a class="dropdown-item" href="#">Tools</a></li>
                </ul>
                </li>
                <li><a href="#">FAQ</a></li>
                <li>
                <a href="#">Contact</a>
                </li>
                <li><a href="#">Blog</a></li>
            </ul>
            <form class="d-flex">
                <select class="form-select" aria-label="Language">
                <option value="pt">pt</option>
                <option value="es">sp</option>
                <option selected="en">en</option>
                </select>
            </form>
        </div>
    </div>
)

export default Menu