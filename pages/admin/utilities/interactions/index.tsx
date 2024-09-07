import React from 'react';
import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Link from 'next/link';
import PageWrapper from '@call-layout/PageWrapper/PageWrapper';
import { componentPagesMenu } from '@call-root-lib/menu';
import SubHeader, { SubHeaderLeft } from '@call-layout/SubHeader/SubHeader';
import Breadcrumb from '@call-components/bootstrap/Breadcrumb';
import Page from '@call-layout/Page/Page';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '@call-components/bootstrap/Card';
import CommonCodePreview from '@call-common/partial/other/CommonCodePreview';
import CommonDesc from '@call-common/partial/other/CommonDesc';

const Index: NextPage = () => {
	const TEXT_SELECTION = `
<p className='user-select-all'>This paragraph will be entirely selected when clicked by the user.</p>
<p className='user-select-auto'>This paragraph has default select behavior.</p>
<p className='user-select-none'>This paragraph will not be selectable when clicked by the user.</p>`;

	const POINTER_EVENT = `
<p><a href='#' className='pe-none' tabIndex='-1' aria-disabled='true'>This link</a> can not be clicked.</p>
<p><a href='#' className='pe-auto'>This link</a> can be clicked (this is default behavior).</p>
<p className='pe-none'><a href='#' tabIndex='-1' aria-disabled='true'>This link</a> can not be clicked because the <code>pointer-events</code> property is inherited from its parent. However, <a href='#' className='pe-auto'> this link</a> has a <code>pe-auto</code> class and can be clicked.</p>`;

	const UTILITIES_API = `
"user-select": (
  	property: user-select,
  	values: all auto none
),
"pointer-events": (
  	property: pointer-events,
  	class: pe,
  	values: none auto,
),`;

	return (
		<PageWrapper>
			<Head>
				<title>{componentPagesMenu.utilities.subMenu.interactions.text}</title>
			</Head>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Utilities', to: '/utilities' },
							{ title: 'Interactions', to: '/utilities/interactions' },
						]}
					/>
				</SubHeaderLeft>
			</SubHeader>
			<Page>
				<div className='row'>
					<div className='col-12 my-4'>
						<h1>Interactions</h1>
						<p className='lead'>
							Utility classes that change how users interact with contents of a
							website.
						</p>
					</div>

					<div className='col-12'>
						<Card id='text-selection' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Text selection</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Change the way in which the content is selected when the user
									interacts with it.
								</p>
								<CommonCodePreview code={TEXT_SELECTION}>
									<p className='user-select-all'>
										This paragraph will be entirely selected when clicked by the
										user.
									</p>
									<p className='user-select-auto'>
										This paragraph has default select behavior.
									</p>
									<p className='user-select-none'>
										This paragraph will not be selectable when clicked by the
										user.
									</p>
								</CommonCodePreview>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='pointer-events' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Pointer events</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Bootstrap provides <code>.pe-none</code> and{' '}
									<code>.pe-auto</code> classes to prevent or add element
									interactions.
								</p>
								<CommonCodePreview code={POINTER_EVENT}>
									<p>
										{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
										<a
											href='#'
											className='pe-none'
											tabIndex={-1}
											aria-disabled='true'>
											This link
										</a>{' '}
										can not be clicked.
									</p>
									<p>
										{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
										<a href='#' className='pe-auto'>
											This link
										</a>{' '}
										can be clicked (this is default behavior).
									</p>
									<p className='pe-none'>
										{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
										<a href='#' tabIndex={-1} aria-disabled='true'>
											This link
										</a>{' '}
										can not be clicked because the <code>pointer-events</code>{' '}
										property is inherited from its parent. However,{' '}
										{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
										<a href='#' className='pe-auto'>
											this link
										</a>{' '}
										has a <code>pe-auto</code> class and can be clicked.
									</p>
								</CommonCodePreview>
								<CommonDesc>
									The <code>.pe-none</code> class (and the{' '}
									<code>pointer-events</code> CSS property it sets) only prevents
									interactions with a pointer (mouse, stylus, touch). Links and
									controls with <code>.pe-none</code> are, by default, still
									focusable and actionable for keyboard users. To ensure that they
									are completely neutralized even for keyboard users, you may need
									to add further attributes such as <code>tabindex="-1"</code> (to
									prevent them from receiving keyboard focus) and{' '}
									<code>aria-disabled="true"</code> (to convey the fact they are
									effectively disabled to assistive technologies), and possibly
									use JavaScript to completely prevent them from being actionable.
									For form controls, consider using the <code>disabled</code> HTML
									attribute instead.
								</CommonDesc>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='sass' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Sass</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<Card id='utilities-api' className='scroll-margin rounded-2'>
									<CardHeader>
										<CardLabel>
											<CardTitle>Utilities API</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<p>
											Interaction utilities are declared in our utilities API
											in{' '}
											<code>node_modules/bootstrap/scss/_utilities.scss</code>
											.{' '}
											<Link href='../utilities/api#using-the-api'>
												Learn how to use the utilities API.
											</Link>
										</p>
										<CommonCodePreview code={UTILITIES_API} language='scss' />
									</CardBody>
								</Card>
							</CardBody>
						</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		// @ts-ignore
		...(await serverSideTranslations(locale, ['common', 'menu'])),
	},
});

export default Index;
