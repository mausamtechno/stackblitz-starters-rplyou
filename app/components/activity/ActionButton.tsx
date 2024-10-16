import { Button } from "../common/Button";
import { Text } from "../common/Text";
import { TComponentB } from "./UpdatedServiceCard";

type TActionButtonProps = TComponentB["actionButton"];
const ActionButton = ({
  actionButton,
}: {
  actionButton: TActionButtonProps;
}) => {
  return (
    <div>
      {"applicableRPoints" in actionButton && (
        <div>
          {actionButton.appliedRPoints ? (
            <div>
              <Button
                variant="outline"
                size="sm"
                className="bg-lightGreen800 text-white"
                onClick={actionButton.handleClick}
              >
                {`AED ${actionButton.appliedRPoints}`}
              </Button>
              <Text>{`${actionButton.appliedRPoints} R-points Applied`}</Text>
            </div>
          ) : (
            <div>
              <Button
                variant="outline"
                size="sm"
                className="text-orange border-orange"
                onClick={actionButton.handleClick}
              >
                Apply cashback
              </Button>
              <Text className="text-right mt-1">{`${actionButton.applicableRPoints} R-points`}</Text>
            </div>
          )}
        </div>
      )}
      {"action" in actionButton && (
        <div className="flex gap-x-2 w-fit">
          <Button
            variant="outline"
            size="sm"
            onClick={actionButton.handleSecondaryBtnClick}
          >
            {actionButton.secondaryButtonText}
          </Button>
          <Button
            variant="default"
            size="sm"
            className="bg-orange text-white"
            onClick={actionButton.handlePrimaryBtnClick}
          >
            {actionButton.primaryButtonText}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ActionButton;
