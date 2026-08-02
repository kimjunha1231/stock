export type AffiliateCompany = '현대그린푸드' | '현대웰니스' | '현대리바트';

export type UserRole = 'THE_HYUNDAI_SEOUL_MD';

export type StoreLocation = 
  | '현대그린푸드 몰' 
  | '현대웰니스 공식몰' 
  | '현대리바트 몰' 
  | string;

export type PurchaseType = '직매입' | '특약매입' | '임대매장';
export type RiskStatus = 'SAFE' | 'CAUTION' | 'WARNING' | 'CRITICAL_NEAR' | 'DEAD_STOCK';

export interface InventoryItem {
  id: string;
  code: string;
  name: string;
  company: AffiliateCompany;
  category: string;
  store: StoreLocation;
  purchaseType: PurchaseType;
  quantity: number;
  costPrice: number;
  sellingPrice: number;
  storageDays: number;
  expiryDaysLeft: number;
  status: RiskStatus;
  riskScore: number;
  reason: string;
  holdingCostPerDay: number;
  estimatedDisposalCost: number;
}

export interface StrategyOption {
  id: string;
  name: string;
  type: 'PURE_PROFIT' | 'FAST_LIQUIDATION' | 'MAX_REVENUE';
  discountRate: number;
  targetChannel: string;
  expectedSalesQty: number;
  expectedRevenue: number;
  expectedGrossMargin: number;
  expectedNetContributionMargin: number;
  savedDisposalCost: number;
  liquidationDays: number;
  confidenceScore: number;
  reasoning: string;
  fallbackPlan: {
    conditionTrigger: string;
    action: string;
    expectedImpact: string;
  };
}

export interface OptimizationCase {
  id: string;
  title: string;
  company: AffiliateCompany;
  targetItems: InventoryItem[];
  bundleItems?: InventoryItem[];
  isBundle: boolean;
  createdAt: string;
  status: 'PENDING' | 'GENERATING' | 'COMPLETED' | 'APPROVED' | 'REJECTED' | 'EXECUTING' | 'FINISHED';
  options: StrategyOption[];
  selectedOptionId?: string;
  executionStatus?: 'NOT_STARTED' | 'EXECUTING' | 'COMPLETED' | 'FAILED';
  executionStartDate?: string;
  executionEndDate?: string;
  actualSalesQty?: number;
  actualLiquidationDays?: number;
  actualNetContributionMargin?: number;
  actualRemainingQty?: number;
  varianceReason?: string;
  approverName?: string;
  approvedAt?: string;
}
