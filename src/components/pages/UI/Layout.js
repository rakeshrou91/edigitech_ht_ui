import React from "react";

import UserProfile from "./UserProfile";
import BodyWrapper from "./bodywrapper";

import 'bootstrap/dist/css/bootstrap.min.css';
export default function Layout ({ children }) {
  return (
    <BodyWrapper>
      <div className="flex h-screen bg-gray-200">
        <UserProfile />

        <div className="flex flex-col flex-1 overflow-hidden">
          <main className="content">
            <section className="sm:flex-row flex flex-col flex-1">
              <div
                className="content-box"
                style={{ flexGrow: 2, flexBasis: "0%" }}
              >
                {children}
              </div>
            </section>
          </main>
        </div>
      </div>
    </BodyWrapper>
  );
};
