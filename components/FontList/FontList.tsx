'use client'

import {
  Alert,
  Box,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Typography
} from '@mui/material'
import Head from 'next/head'
import { useCallback, useMemo } from 'react'

import useGetFontsQuery from '@/hooks/useGetFontsQuery'
import { PreviewTextType } from '@/lib/enums'
import { useStore } from '@/store/useStore'

const FontList = () => {
  const { query, preview, categories, subset, variableOnly } = useStore()
  const { loading, fonts, error } = useGetFontsQuery({
    options: {
      capability: variableOnly ? 'VF' : undefined,
      subset
    }
  })

  const getPreviewText = useCallback(() => {
    switch (preview.type) {
      case PreviewTextType.Custom: {
        return preview.text
      }
      case PreviewTextType.Paragraph: {
        return `No one shall be subjected to arbitrary arrest, detention or exile.
        Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him.
        No one shall be subjected to arbitrary interference with his privacy, family, home or correspondence, nor to attacks upon his honour and reputation. Everyone has the right to the protection of the law against such interference or attacks.`
      }
      case PreviewTextType.Sentence: {
        return 'Whereas recognition of the inherent dignity'
      }
      default: {
        return ''
      }
    }
  }, [preview.text, preview.type])

  const fontCards = useMemo(() => {
    if (!fonts.length) return null

    return fonts
      .filter(
        ({ family, category }) =>
          family.toLowerCase().includes(query.toLowerCase()) &&
          categories.includes(category)
      )
      .map(({ family }) => (
        <Grid key={family} item xs={12} sm={6} md={4}>
          <Head>
            <link
              href={`https://fonts.googleapis.com/css2?family=${family.replace(
                /\s/g,
                '+'
              )}&display=swap`}
              rel="stylesheet"
            />
          </Head>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {family}
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontFamily: family, fontSize: preview.size }}>
                {getPreviewText()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))
  }, [categories, fonts, getPreviewText, preview.size, query])

  if (error)
    return (
      <Box marginY={2}>
        <Alert severity="error">{error.message}</Alert>
      </Box>
    )

  if (loading)
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginY={2}>
        <CircularProgress />
      </Box>
    )

  return (
    <Grid container marginY={2} spacing={2}>
      {fontCards}
    </Grid>
  )
}

export default FontList
