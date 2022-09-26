import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Path from "./Path";
import { useCheckLogin } from "domains/@shared/hooks";

const SharePage = lazy(() => import("domains/share/pages/SharePage"));
const ProfileEditPage = lazy(
  () => import("domains/mypage-edit/pages/ProfileEditPage")
);
const MobileSignupPage = lazy(
  () => import("domains/signup/pages/MobileSignupPage")
);
const MobileLoginPage = lazy(
  () => import("domains/login/pages/MobileLoginPage")
);
const MyPage = lazy(() => import("domains/mypage/pages/MyPage"));
const NotFoundPage = lazy(() => import("domains/notFound/pages/NotFoundPage"));
const TrashPage = lazy(() => import("domains/trash/pages/TrashPage"));
const SearchPage = lazy(() => import("domains/search/pages/SearchPage"));
const DotoriPage = lazy(() => import("domains/dotori/pages/DotoriPage"));
const MobileDotoriPage = lazy(
  () => import("domains/dotori/pages/MobileDotoriPage")
);

export function PublicRouting() {
  return (
    <Suspense fallback={<div css="min-height: 100vh" />}>
      <Routes>
        <Route path={Path.SharePage} element={<SharePage />} />
        <Route path={Path.LoginPage} element={<MobileLoginPage />} />
        <Route path={Path.SignupPage} element={<MobileSignupPage />} />
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

        <Route path={Path.DotoriPage} element={<MobileDotoriPage />} />

        <Route path={Path.DotoriFolderPage} element={<DotoriPage />} />
        <Route path={Path.TrashPage} element={<TrashPage />} />
        <Route path={Path.SearchPage} element={<SearchPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
