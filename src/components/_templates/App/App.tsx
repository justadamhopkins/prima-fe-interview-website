import { SiteContainer } from "@atoms/SiteContainer";
import { HomePage } from "@components/_templates/HomePage";
import { Route, Routes } from "react-router";

export const App = () => {
  return (
    <SiteContainer>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </SiteContainer>
  );
};
