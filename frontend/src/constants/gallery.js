/** Public Google Drive folder — Cookies & Biscuits photography. */
export const GALLERY_DRIVE_FOLDER_URL =
  'https://drive.google.com/drive/folders/1pLHmFbx2eT2wRQYxD0wsijyu8wsuNXp0?usp=sharing';

/**
 * Shared image file IDs from the Drive folder (thumbnails work when the folder is link-shared).
 * @param {string} fileId
 * @param {number} [maxEdge=1000] max width hint for Google's thumbnail service
 * @returns {string}
 */
export function driveThumbnailUrl(fileId, maxEdge = 1000) {
  return `https://drive.google.com/thumbnail?id=${encodeURIComponent(fileId)}&sz=w${maxEdge}`;
}

/** Opens the file in Google Drive (full resolution / download). */
export function driveFilePageUrl(fileId) {
  return `https://drive.google.com/file/d/${fileId}/view`;
}

/** All cookie & biscuit photos from the shared folder. */
export const GALLERY_DRIVE_FILE_IDS = [
  '1-16TfxqVYTzii9i_OnoKvOZ_6Awx1ccS',
  '10RWgTDBT9thFkKPd1mIhOW_RMQ0mErLt',
  '10jU8TR-mNqzYCnHLSGJ8UQ2J_gJ5lIS4',
  '11DMKpPJOHrVmw9v1naJNYjaausPBzCSk',
  '11Hv0sFJkZLtVCcTvH5tGWbHKRhoSLpFV',
  '14-9JrLR1N-2U5tyKiReXRDbEl-NoFSog',
  '15Or_uBGiaiCid5uig92e4zGFXrROHA-E',
  '18QtIzSQj9l1ivoP7OLtOOCsvZd84nsSz',
  '1BALj6iT1QKpqxbE4MSZQmgVnKpheHUS7',
  '1BnZ32UbwWREeyE73igHr6gRLub60QcQT',
  '1CELRiuo4EJfJnYp4suq9QZEjZpZ5Ia-k',
  '1F12kUmrVVlzYPxRETGmWCGOUwurTweLV',
  '1HE5pDV7QjmFIySwgMBBcYAfiCp5fRbov',
  '1Js6wCZgzujYzwgzXqnNrWRKM5yMGtSdm',
  '1K17RcnjmXSoKPeWW-KK7EuUgYYuwvA-8',
  '1LC4qYimCLUsdUt9RiLnRzRxBITGpTSlZ',
  '1LwouN47kY4ti0Eh-rlTWSn0zEBy0Ad7t',
  '1Md8dlVvxDadD4KP7llIF_GsA6TYdphzW',
  '1Mf-c4fXFpH1QePqKhCzkdVc-SO28VSzg',
  '1QhHGB4yo346YSAoEB2DQ4vX2o3UsbjrE',
  '1RHz1ayeHh667M4cmSxcE5hReyZCZfg3f',
  '1RWrTMgNJPjoerbGzGMUAo4HXsN_DS-RD',
  '1Rpj7j7STVnIXjEdZ0y4oOZyiL_Sn5o7T',
  '1SQmrfiXefqOsQ75kuKNBop2qQxIdToNs',
  '1T6PEdaclb4Tl567huq1FlUeXzMeNbkx2',
  '1TzWZux10QM-erliU0ezE6zLAi9bWoXyY',
  '1VuyJFV__ugb7h5ya-Iv6KmQ2oP1T3V4C',
  '1W1kULc0c7nZiO8Yg2ZzVXsjRdWyM-jH0',
  '1X4lfnZXPN4lI3ptQTvg9t88AUST6my6B',
  '1_2OPFbxMGsMsK4Co4DN5W5U7D5oAo757',
  '1a8KVQ7olQFLIrLjyLj1UM-_jYcwWyoF-',
  '1cPvc19Im_KWDCrRNj2WPr2YMAGBiJd_a',
  '1dcJ8Nn_PMSbi3O0DOn-kLdSEo7RH9NhY',
  '1fWKNmuZ4CaIQ--PzQb4jDiZ4pEaYTiB4',
  '1gPFWwYjMbQ-q_sFKiyz3PFJBo3NwKsgA',
  '1iA8QdZd9KKSW-JDYkxwGgG93RpjZ1BpF',
  '1jnnlWZBer-C_bKOV6W7f7EthGpAScTwh',
  '1o0p1aQBDgwP8LltmuDX1qS_vW4_o9AU8',
  '1rJ65rf4X56575dgwQWLT8_BLa-6qAb_A',
  '1rlXp3uq0qF3oVG88m0jMJSokjd4QN8Ug',
  '1stO7DeGajos9cLNhn135YsiEIQ_9J-lm',
  '1swNRzIb9sHAA83kQ_7gX1CaYqhnLKQIP',
  '1u-MHbxgiJWHaZFwmC4iBXTtXWbkK6Q12',
  '1ud30zhSz9Qmpy9-Oo2qHKnhVLLPg08mm',
  '1v7a7C579qKN8SCz08GcOhGbhbRJ6Uts0',
  '1xEuxZY8dEfpVfPZ6Bpq2OuY_-WFIeFsX',
  '1xqEA9qZ01O0E6i5DvRY8et60kDz4gCM4',
  '1yPju0UnkTU6h_VPQcy53RB5fjh1_aJut',
  '1ze-BEF7_Rd4J_k5RQN6A7WdJKKfwinDV',
  '1zxUdWmixQGvbootvXZ-nQP2GkAKrJBpT',
];

/** Subset for home / story previews (spread across the full set). */
export const GALLERY_HOME_PREVIEW_IDS = [
  '1W1kULc0c7nZiO8Yg2ZzVXsjRdWyM-jH0',
  '1T6PEdaclb4Tl567huq1FlUeXzMeNbkx2',
  '1rlXp3uq0qF3oVG88m0jMJSokjd4QN8Ug',
  '1xEuxZY8dEfpVfPZ6Bpq2OuY_-WFIeFsX',
];
