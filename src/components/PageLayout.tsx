import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { AnalyticsProvider, AnalyticsScopeProvider } from "@yext/sites-components";
import { TemplateProps } from "@yext/pages";
import 'bootstrap/dist/css/bootstrap.min.css';

export interface PageLayoutProps {
  children?: React.ReactNode;
  data?: any;
  templateData: TemplateProps;
}

const transformColor = (color: string | undefined): string => {
  return color ? color.replace(/\s+/g, '').toLowerCase() : 'white';
};

const PageLayout = ({ children, data, templateData }: PageLayoutProps) => {

  const backgroundColor = `
    --backgroundColor: ${transformColor(data?.c_backgroundColor)};
    --app-primary: ${templateData?.document?.c_primaryColor};
    --app-secondary: ${templateData?.document?.c_secondaryColor};
    --map-section-background: ${templateData?.document?.c_financeSectionHeading ? '#e6eaf8':'#fff'}
  `;

  return (
    <>
      <style>{`:root {${backgroundColor}}`}</style>
      <AnalyticsProvider templateData={templateData}>
        <div className="min-h-screen">
          <AnalyticsScopeProvider name="header">
            <Header data={data} templateData={templateData?.document} />
          </AnalyticsScopeProvider>
          {children}
          <AnalyticsScopeProvider name="footer">
            <Footer data={data} templateData={templateData?.document} />
          </AnalyticsScopeProvider>
        </div>
      </AnalyticsProvider>
    </>
  );
};

export default PageLayout;
