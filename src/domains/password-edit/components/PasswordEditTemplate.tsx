import React, { ReactNode } from "react";
import styled from "styled-components";

interface PasswordEditTemplateProps {
  children: ReactNode;
  className?: string;
}

function PasswordEditTemplate({
  children,
  className,
}: PasswordEditTemplateProps) {
  return (
    <PageBlock className={className}>
      <PageInner>{children}</PageInner>
    </PageBlock>
  );
}

const PageBlock = styled.div`
  width: 669px;
  margin: 0 auto;
`;

const PageInner = styled.div`
  padding-top: 48px;
`;

export default PasswordEditTemplate;
