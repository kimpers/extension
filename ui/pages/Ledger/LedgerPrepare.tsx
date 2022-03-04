import React, { ReactElement } from "react"
import LedgerContinueButton from "../../components/Ledger/LedgerContinueButton"
import LedgerPanelContainer from "../../components/Ledger/LedgerPanelContainer"

export default function LedgerPrepare({
  onContinue,
  initialScreen,
  deviceCount,
}: {
  onContinue: () => void
  initialScreen: boolean
  deviceCount: number
}): ReactElement {
  const buttonLabel = initialScreen ? "Continue" : "Try Again"
  const subHeadingVerb = initialScreen ? "start" : "retry"
  const warningText =
    deviceCount === 0
      ? "No Ledger device is connected"
      : "Multiple Ledgers are connected"
  return (
    <LedgerPanelContainer
      indicatorImageSrc="/images/connect_ledger_indicator_disconnected.svg"
      heading={initialScreen ? "Before we get started" : "Check your Ledger"}
      subHeading={`Make sure you take these 3 steps before we ${subHeadingVerb}`}
    >
      {!initialScreen ? (
        <div className="steps">
          <div className="warning error">
            <span className="block_icon" />
            {warningText}
          </div>
          <div className="warning">
            Please follow the steps below and <br /> click on Try Again!
          </div>
        </div>
      ) : (
        <></>
      )}
      <ol className="steps">
        <li>Plug in a single Ledger</li>
        <li>Enter pin to unlock</li>
        <li>Open Ethereum App</li>
      </ol>
      <LedgerContinueButton onClick={onContinue}>
        {buttonLabel}
      </LedgerContinueButton>
      <style jsx>{`
        .steps {
          list-style: none;
          padding: 0.5rem;
          counter-reset: step;
          background-color: var(--hunter-green);
        }

        .steps > li {
          display: flex;
          align-items: center;
          font-size: 22px;
          font-weight: 500;
          line-height: 32px;
        }

        .steps > li::before {
          content: counter(step);
          counter-increment: step;
          display: inline-block;
          width: 2.5rem;
          height: 2.5rem;
          margin: 1rem;
          margin-right: 2rem;
          border-radius: 1.25rem;
          border: 1px solid var(--green-60);
          color: var(--green-60);
          line-height: 2.5rem;
          vertical-align: middle;
          text-align: center;
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
        }

        .block_icon {
          width: 24px;
          height: 24px;
          margin: 8px;
          background: no-repeat center / cover url("./images/block_icon@2x.png");
        }

        .warning {
          display: flex;
          align-items: center;
          text-align: center;
          justify-content: center;
          padding: 16px;
        }

        .error {
          color: var(--error);
          font-weight: 600;
          font-size: 18px;
        }
      `}</style>
    </LedgerPanelContainer>
  )
}
