import * as React from "react";
import { Outlet } from "react-router-dom";

export const RootLayout: React.FC = () => (
  <>
    <div>
      <aside>
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
            </ul>
          </nav>
        </header>
      </aside>

      <hr />

      <main>
        <Outlet />
      </main>
    </div>
  </>
);
