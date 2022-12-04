import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Path from "./Path";
import SidebarRouteLayout from "domains/@global/sidebar/SidebarRouteLayout";
import { useCheckLogin } from "domains/@shared/hooks";

const SharePage = lazy(() => import("domains/share/pages/SharePage"));
const ProfileEditPage = lazy(() => import("domains/mypage-edit/pages/ProfileEditPage"));
const SignupPage = lazy(() => import("domains/signup/pages/SignupPage"));
const LoginPage = lazy(() => import("domains/login/pages/LoginPage"));
const MyPage = lazy(() => import("domains/mypage/pages/MyPage"));
const NotFoundPage = lazy(() => import("domains/@global/notFound/NotFoundPage"));
const TrashPage = lazy(() => import("domains/trash/pages/TrashPage"));
const SearchPage = lazy(() => import("domains/search/pages/SearchPage"));
const DotoriPage = lazy(() => import("domains/dotori/pages/DotoriPage"));
const PasswordEditPage = lazy(
  () => import("domains/password-edit/pages/PasswordEditPage")
);

export function PublicRouting() {
  return (
    <Suspense fallback={<div css="min-height: 100vh" />}>
      <Routes>
        <Route path={Path.SharePage} element={<SharePage />} />
        <Route path={Path.LoginPage} element={<LoginPage />} />
        <Route path={Path.SignupPage} element={<SignupPage />} />
        <Route path="*" element={<Navigate replace to={Path.LoginPage} />} />
      </Routes>
    </Suspense>
  );
}

export function PrivateRouting() {
  useCheckLogin();

  return (
    <Suspense fallback={<div css="min-height: 100vh" />}>
      <Routes>
        <Route path={Path.SharePage} element={<SharePage />} />
        <Route
          path={Path.HomePage}
          element={<Navigate replace to={Path.DotoriPage} />}
        />
        <Route path={Path.MyPage} element={<MyPage />} />
        <Route path={Path.ProfileEditPage} element={<ProfileEditPage />} />
        <Route path={Path.ProfileEditPage} element={<PasswordEditPage />} />

        <Route path={Path.HomePage} element={<SidebarRouteLayout />}>
          <Route path={Path.DotoriPage} element={<DotoriPage />} />

          <Route path={Path.DotoriFolderPage} element={<DotoriPage />} />
          <Route path={Path.TrashPage} element={<TrashPage />} />
          <Route path={Path.SearchPage} element={<SearchPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
