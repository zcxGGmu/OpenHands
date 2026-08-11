import { useTranslation } from "react-i18next";
import { Typography } from "#/ui/typography";
import { I18nKey } from "#/i18n/declaration";

export function HomeHeaderTitle() {
  const { t } = useTranslation("openhands");

  return (
    <div className="flex w-full flex-col items-center justify-center gap-3 py-2">
      <Typography.H1 className="w-full text-center leading-normal">
        {t(I18nKey.HOME$LETS_START_BUILDING)}
      </Typography.H1>
      <Typography.Text className="max-w-[640px] text-center text-[var(--oh-text-tertiary)]">
        {t(I18nKey.HOME$OPENHANDS_DESCRIPTION)}
      </Typography.Text>
    </div>
  );
}
