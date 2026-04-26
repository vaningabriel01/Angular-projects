import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';
import { Header } from "./components/header/header";
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Header, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('petro-energy-av1');
}
