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
const NotFoundPage = lazy(() => import("domains/notFound/pages/NotFoundPage"));
const MobileDotoriPage = lazy(
  () => import("domains/dotori/pages/MobileDotoriPage")
);
const MobileDotoriFolderPage = lazy(
  () => import("domains/dotori/pages/MobileDotoriFolderPage")
);
const MobileMyPage = lazy(() => import("domains/mypage/pages/MobileMyPage"));
const MobileMakePeoplePage = lazy(
  () => import("domains/mypage/pages/MobileMakePeoplePage")
);
const MobileSearchPage = lazy(
  () => import("domains/search/pages/MobileSearchPage")
);

const MobileTrashPage = lazy(
  () => import("domains/trash/pages/MobileTrashPage")
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
        <Route path={Path.MyPage} element={<MobileMyPage />} />
        <Route path={Path.MakePeoplePage} element={<MobileMakePeoplePage />} />
        <Route path={Path.ProfileEditPage} element={<ProfileEditPage />} />

        <Route path={Path.DotoriPage} element={<MobileDotoriPage />} />

        <Route
          path={Path.DotoriFolderPage}
          element={<MobileDotoriFolderPage />}
        />
        <Route path={Path.TrashPage} element={<MobileTrashPage />} />
        <Route path={Path.SearchPage} element={<MobileSearchPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
