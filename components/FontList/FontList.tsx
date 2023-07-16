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
import { useMemo } from 'react'

import useGetFontsQuery from '@/hooks/useGetFontsQuery/useGetFontsQuery'
import { useStore } from '@/store/useStore'

const FontList = () => {
  const { query, preview, categories, subset, variableOnly } = useStore()
  const { loading, fonts, error } = useGetFontsQuery({
    options: {
      capability: variableOnly ? 'VF' : undefined,
      subset
    }
  })

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
                {preview.text || 'Whereas recognition of the inherent dignity'}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))
  }, [categories, fonts, preview.size, preview.text, query])

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
