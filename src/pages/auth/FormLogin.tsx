import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMutation } from "react-query";
import authQueries, { USER_SIGN_IN } from "@/state/auth/authQueries";

type FormValues = {
  login_username: string;
  login_password: string;
};

const FormLogin: React.FC = () => {
  const { t } = useTranslation();

  const m_login = useMutation(USER_SIGN_IN);

  return (
      <div className="tw-w-[300px]">
        Login form
      </div>
  )
};

export default React.memo(FormLogin);
