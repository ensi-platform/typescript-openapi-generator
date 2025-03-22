/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface ConfirmationCode {
  /** Identifier of verification code */
  id: number;
  /**
   * Identifier of user
   * @nullable
   */
  user_id?: number | null;
  /** Phone number */
  phone: string;
  /** Request verification code attempt number */
  attempt: number;
  /** Number of errors when entering the verification code */
  failed_checks_count: number;
  /** Expiration date of the verification code */
  expired_at: string;
  /**
   * Verification date (correct code entry)
   * @nullable
   */
  verified_at?: string | null;
  /** Date of creation */
  created_at: string;
}
